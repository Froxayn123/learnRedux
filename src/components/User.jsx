import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/slices/userSlice";

const User = () => {
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <div>loading</div>;
  }

  console.log(userData);

  return (
    <>
      <div>
        <h2>User Details</h2>
        {userData?.map((item) => (
          <div key={item.id}>
            <span>Name: {item.name}</span>
            <span> - </span>
            <span>E-Mail: {item.email}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default User;
