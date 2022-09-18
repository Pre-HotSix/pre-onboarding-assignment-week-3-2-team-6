import axios from 'axios';

const apiRoot = axios.create({ baseURL: 'http://localhost:4000' });

export const getCommentListLength = async () => {
  try {
    const { data } = await apiRoot(`/comments`);

    return data.length;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const getCommentListPerPage = async (page = 1) => {
  try {
    const { data } = await apiRoot.get(`/comments`, {
      params: { _page: page, _limit: 4, _order: 'desc', _sort: 'id' },
    });

    return data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const getComment = async (commentId: number) => {
  try {
    const { data } = await apiRoot.get(`/comments/${commentId}`);

    return data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const removeComment = async (commentId: number) => {
  try {
    await apiRoot.delete(`/comments/${commentId}`);
  } catch (err) {
    throw new Error('not found page');
  }
};

export const editComment = async (commentId: number, data: any) => {
  try {
    await apiRoot.put(`/comments/${commentId}`, { data: data });
  } catch (err) {
    throw new Error('not found page');
  }
};

export const createComment = async (data: any) => {
  try {
    await apiRoot.post(`/comments`, { data: data });
  } catch (err) {
    throw new Error('not found page');
  }
};
