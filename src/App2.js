import './App.css';
/* import MyComponent from './Component/MyComponent';
import Box from './Component/Box'; */
import Header from './Pages/Header';
import Content from './Pages/Content';
import Footer from './Pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let data = '리액트';
  return (
    //데이터 바인딩: 변수값을 html에 선언하는 것

    /* <div className="App">
      <h1 className="subTitle">드디어 리액트 합니다.</h1>
      <p style={{color:'blue', fontSize: '30px'}}>{data} 첫번째 규칙 : class는 'className'로 선언</p>
      <p>두번째 규칙 : 모든 콘텐츠는 감싸는 부모가 있어야 함</p>
      <p>└빈 태그(Fragment)로도 가능'&lt;&gt; &lt;/&gt;'</p>
    </div> */
    <>
    <Header />
    <Content />
    <Footer />
    </>
    
  );
}

export default App;