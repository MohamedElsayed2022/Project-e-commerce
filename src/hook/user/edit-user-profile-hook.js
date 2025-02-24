import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import {
  updateUserData,
  updateUserPassword,
} from "../../Redux/Actions/authAction";
import { Navigate, useNavigate } from "react-router-dom";

const EditUserProfileHook = () => {
  // const [user, setUser] = useState("");
  // useEffect(() => {
  //   if (localStorage.getItem("user") != null)
  //     setUser(JSON.parse(localStorage.getItem("user")));
  // }, []);

  let user = [];
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  const [show, setShow] = useState(false);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelEdit = async () => {
    let body;
    if (user.email === email) {
      body = {
        name,
        phone,
      };
    } else {
      body = {
        name,
        email,
        phone,
      };
    }
    setLoading(true);
    await dispatch(updateUserData(body));
    setLoading(false);
    setShow(false);
  };

  const res = useSelector((state) => state.auth.userProfile);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        console.log(res);
        notify("تم تحديث البيانات بنجاح ", "success");
        localStorage.setItem("user", JSON.stringify(res.data.data.user));

        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("هناك خطأ فى تحديث البيانات", "error");
      }
    }
  }, [loading]);

  // change Password
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loadingPass, setLoadingPass] = useState(true);
  const navigate = useNavigate();
  const onChangeCurPass = (e) => {
    setOldPassword(e.target.value);
  };
  const onChangePass = (e) => {
    setNewPassword(e.target.value);
  };
  const onChangePassConfirm = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const resPass = useSelector((state) => state.auth.newPassword);

  const handleChangePassword = async () => {
    if (newPassword === "" || confirmNewPassword === "") {
      notify("من فضلك املأ جميع الحقول", "warn");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      notify("كلمات المرور غير متطابقة", "warn");
      return;
    }
    setLoadingPass(true);
    await dispatch(
      updateUserPassword({
        currentPassword: oldPassword,
        password: newPassword,
        passwordConfirm: confirmNewPassword,
      })
    );
    setLoadingPass(false);
  };
  useEffect(() => {
    if (loadingPass === false) {
      if (resPass && resPass.status === 200) {
        notify("تم تغيير كلمة السر بنجاح", "success");
       
        setTimeout(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.href = "/login"
        }, 1500);
      } else {
        notify("هناك خطأ فى تغيير كلمة السر", "warn");
      }
    }
  }, [loadingPass]);
  return [
    show,
    onChangeEmail,
    onChangeName,
    onChangePhone,
    handleClose,
    handleShow,
    handelEdit,
    onChangeCurPass,
    onChangePass,
    onChangePassConfirm,
    handleChangePassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
    name,
    email,
    phone,
    user,
  ];
};
export default EditUserProfileHook;
