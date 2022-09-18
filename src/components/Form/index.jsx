import * as S from './style';
import { useSelector, useDispatch } from "react-redux";
import { postCommentThunk, putCommentThunk } from '../../redux/modules/comments';
import { resetFormAction } from '../../redux/modules/singleComment';
import { paginationAction } from '../../redux/modules/pagination';
import { useRef } from 'react';

function Form() {
  const dispatch = useDispatch();
  const ref = useRef();

  const dateToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const full = `${year}-${month < 10 ? ('0' + month): month}-${day < 10 ? ('0' + day): day}`;

    return full;
  };

  const singleComment = useSelector(state => state.singleComment);
  
  const postData = ({ ...inputData }) => dispatch(postCommentThunk({ ...inputData }));
  const putData = (id, { ...inputData }) => dispatch(putCommentThunk(id, { ...inputData }));
  const resetForm = () => {
    dispatch(resetFormAction());
    ref.current.reset();
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
    ref.current.reset();
  };


  return (
    <S.FormStyle>
      <form onSubmit={(e) => submitHandler(e, singleComment.id)} ref={ref}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          defaultValue={singleComment.profile_url}
        />
        <input type="text" name="author" placeholder="작성자" required defaultValue={singleComment.author} />
        <input type="text" name="content" placeholder="내용" required defaultValue={singleComment.content} />
        <input type="text" name="createdAt" placeholder={dateToday()} required defaultValue={singleComment.createdAt} />
        <button type="submit" name="button">{Object.keys(singleComment).length === 0 ? '등록': '수정'}</button>
        <button type="button" onClick={resetForm}>취소</button>
      </form>
    </S.FormStyle>
  );
}

export default Form;