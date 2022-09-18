import Form from '../../components/Form';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, editComment } from '../../redux/modules/comments';
import { RootState } from '../../redux/modules';

export default function FormContainer() {
  const dispatch = useDispatch();
  const { comment, page } = useSelector(
    (state: RootState) => state.commentsReducer
  );
  const [form, setForm] = useState({
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (comment.id) dispatch(editComment(comment.id, form, page));
    else dispatch(createComment(form));

    setForm({
      profile_url: '',
      author: '',
      content: '',
      createdAt: '',
    });
  };

  return <Form form={form} setForm={setForm} submit={handleSubmit} />;
}
