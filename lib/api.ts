export async function getUsers(token: string) {
  try {
    console.log("Token:", token); // Kiểm tra token

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorDetails = await res.json();
      console.error("Error details:", errorDetails); // In chi tiết lỗi từ API
      throw new Error("Failed to fetch users");
    }

    return res.json();
  } catch (error) {
    console.error("Error occurred:", error);
    return [];
  }
}
