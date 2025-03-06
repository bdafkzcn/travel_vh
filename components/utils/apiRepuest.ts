import { AxiosError } from "axios";
import { toast } from "sonner";

interface ApiErrorResponse {
  message: string;
}

export const handleAuthRequest = async<T>(
  requestCallback: () => Promise<T>,
  setLoading?: (loading: boolean) => void
): Promise<T | null> => {
  if(setLoading) setLoading(true);

  try {
    const response = await requestCallback();
    return response;
  } catch(error) {
    const AxiosError = error as AxiosError<ApiErrorResponse>;
    console.log(error);
    if (AxiosError?.response?.data?.message) {
      console.log(AxiosError?.response?.data?.message);
      toast.error(AxiosError?.response?.data?.message);
    }else{
      toast.error("An unexpected error occrured");
    }
    return null;
  } finally {
    if (setLoading) setLoading(false);
  }
  
};