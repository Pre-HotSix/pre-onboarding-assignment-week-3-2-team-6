import { useSelector, useDispatch } from 'react-redux';
import { postCommentThunk, putCommentThunk } from 'redux/modules/comments';
import { resetFormAction } from 'redux/modules/singleComment';
import { paginationAction } from 'redux/modules/pagination';
import { useRef } from 'react';
import Form from 'components/Form';

export default function FormContainer() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const dateToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const full = `${year}-${month < 10 ? '0' + month : month}-${
      day < 10 ? '0' + day : day
    }`;

    return full;
  };

  const singleComment = useSelector((state) => state.singleComment);

  const postData = ({ ...inputData }) =>
    dispatch(postCommentThunk({ ...inputData }));
  const putData = (id, { ...inputData }) =>
    dispatch(putCommentThunk(id, { ...inputData }));
  const resetForm = () => {
    dispatch(resetFormAction());
    inputRef.current.reset();
  };

  const submitHandler = (e, id) => {
    e.preventDefault();
    const ET = e.target;
    const commentId = id;
    const profile_url = ET.profile_url.value;
    const author = ET.author.value;
    const content = ET.content.value;
    const createdAt = ET.createdAt.value;
    const inputData = { profile_url, author, content, createdAt };

    if (ET.button.innerText === '등록') {
      postData({ ...inputData });
      dispatch(paginationAction(1));
    } else putData(commentId, { ...inputData });
    inputRef.current.reset();
  };

  return (
    <Form
      singleComment={singleComment}
      date={dateToday}
      reset={resetForm}
      submit={submitHandler}
      ref={inputRef}
    />
  );
}
