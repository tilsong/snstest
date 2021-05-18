import React from "react";
import { useRouter } from "next/router";
const User = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div> {id} 번 user의 {id}페이지 입니다.</div>;
};

export default User;