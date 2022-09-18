import { forwardRef } from 'react';
import * as S from './style';

const Form = forwardRef(({ singleComment, date, submit, reset }, ref) => {
  return (
    <S.FormStyle>
      <form onSubmit={(e) => submit(e, singleComment.id)} ref={ref}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          defaultValue={singleComment.profile_url}
        />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          required
          defaultValue={singleComment.author}
        />
        <input
          type="text"
          name="content"
          placeholder="내용"
          required
          defaultValue={singleComment.content}
        />
        <input
          type="text"
          name="createdAt"
          placeholder={date()}
          required
          defaultValue={singleComment.createdAt}
        />
        <button type="submit" name="button">
          {Object.keys(singleComment).length === 0 ? '등록' : '수정'}
        </button>
        <button type="button" onClick={reset}>
          취소
        </button>
      </form>
    </S.FormStyle>
  );
});
Form.displayName = 'Form';

export default Form;
