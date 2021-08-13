import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledPostsBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid green;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [post, setPost] = useState({
    id: 5,
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: '하하', content: '내용1' },
    { id: 2, title: '호호', content: '내용2' },
    { id: 3, title: '뽀뽀', content: '내용3' },
    { id: 4, title: '쿠쿠', content: '내용4' },
    { id: 5, title: '키키', content: '내용5' },
  ]);

  const handleWrite = (e) => {
    e.preventDefault(); //form태그가 하려는 액션을 중지 시켜야함
    setPosts([...posts, { ...post, id: post.id + 1 }]);
    setPost({ ...post, id: post.id + 1 });
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleForm = (e) => {
    //computed property names (키 값 동적 할당)
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>글 목록 페이지</h1>
      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <Button variant="outline-success" onClick={handleWrite}>
          글쓰기
        </Button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledPostsBoxDiv>
          <div>
            번호:{post.id}\ 제목:{post.title}\ 내용:{post.content}
          </div>
          <Button
            onClick={() => handleDelete(post.id)}
            variant="outline-danger"
          >
            삭제
          </Button>
        </StyledPostsBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
