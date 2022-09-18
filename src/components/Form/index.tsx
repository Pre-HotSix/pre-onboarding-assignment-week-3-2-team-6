import { Dispatch, SetStateAction } from 'react';
import * as S from './style';

interface Prop {
  form: {
    profile_url: string;
    author: string;
    content: string;
    createdAt: string;
  };
  setForm: Dispatch<
    SetStateAction<{
      profile_url: string;
      author: string;
      content: string;
      createdAt: string;
    }>
  >;
  submit: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export default function Form({ form, setForm, submit }: Prop) {
  return (
    <S.FormStyle>
      <form>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          value={form.profile_url}
          onChange={(e) => setForm({ ...form, profile_url: e.target.value })}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          value={form.createdAt}
          onChange={(e) => setForm({ ...form, createdAt: e.target.value })}
        />
        <br />
        <button onClick={submit}>등록</button>
      </form>
    </S.FormStyle>
  );
}
