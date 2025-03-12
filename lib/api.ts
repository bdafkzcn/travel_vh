export async function getUsers() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Thêm Authorization nếu cần
        // 'Authorization': `Bearer ${your_token}`
      },
      cache: 'no-store', // để luôn fetch mới
    });

    if (!res.ok) throw new Error("Failed to fetch users");

    return res.json(); // Trả về mảng user
  } catch (error) {
    console.error(error);
    return []; // Trả về mảng rỗng nếu lỗi
  }
}
