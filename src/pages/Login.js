import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const goToMain = e => {
    navigate('/main');
  };

  return (
    <div className="loginApp">
      <div className="container">
        <h1 className="logo">Westagram</h1>
        <form className="loginForm">
          <div className="loginCtl">
            <input
              type="text"
              className="id"
              placeholder="전화번호, 사용자 이름또는 이메일"
            />
          </div>
          <div className="loginCtl">
            <input
              type="password"
              className="password"
              placeholder="비밀번호"
            />
          </div>
          <button
            type="submit"
            className="loginBtn"
            // disabled
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <div className="midLine">
          <div className="line"></div>
          <div className="or">
            <span>또는</span>
          </div>
          <div className="line"></div>
        </div>
        <Link to="#" className="pwdFind">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
};
