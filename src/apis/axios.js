import axios from 'axios';

const ORDER = '_order=desc';
const SORT = '_sort=id';

const apiRoot = axios.create({
  baseURL: 'http://localhost:4000/comments',
  headers: { 'Content-Type': 'application/json' },
});

const getAllCommentsApi = async () => {
  try {
    const { data } = await apiRoot.get(`?${ORDER}&${SORT}`);
    return data;
  } catch (error) {
    throw new Error('not found page');
  }
};

const getCommentApi = async (commentId) => {
  try {
    const { data } = await apiRoot.get(`/${commentId}`);
    return data;
  } catch (error) {
    throw new Error('not found page');
  }
};

const postCommentApi = async ({ profile_url, author, content, createdAt }) => {
  try {
    const { data } = await apiRoot.post('', {
      profile_url, 
      author, 
      content, 
      createdAt
    });

    return data;
  } catch (error) {
    throw new Error('not found page');
  }
};

const putCommentApi = async (commentId, { profile_url, author, content, createdAt }) => {
  try {
    const { data } = await apiRoot.put(`/${commentId}`, {
      profile_url, 
      author, 
      content, 
      createdAt
    });
    
    return data;
  } catch (error) {
    throw new Error('not found page');
  }
};

const deleteCommentApi = async (commentId) => {
  try {
    const { data } = await apiRoot.delete(`/${commentId}`);
    return data;
  } catch (error) {
    throw new Error('not found page');
  }
};

export { getAllCommentsApi, getCommentApi, postCommentApi, putCommentApi, deleteCommentApi };