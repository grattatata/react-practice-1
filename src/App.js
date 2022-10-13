import { useRef, useState } from "react";
import "./App.css";
// import { useEffect } from "react";

//추가, 편집 ,삭제

function App() {
  let [value, setValue] = useState(1);

  //   const handleChange = ({ target }) => {
  //     setValue(target.value);
  //   };
  // };

  const data = useRef(null);

  const inputClick = () => {
    if (data.current.value == "") {
      return alert("값을 입력해주세요");
    } else {
      return setList([...list, data.current.value]);
    }
  };

  const [list, setList] = useState([1, 2, 3, 4]);

  const onClick = () => {
    // 불변성을 유지해야 한다는 규칙이 있음.
    setList([...list, list.length + 1]);
  };

  const onModify = (value) => {
    setList(
      list.map((text) => {
        if (value === text) {
          return "텍스트 수정";
        } else {
          return text;
        }
      })
    );
  };

  const onDelete = (value) => {
    setList(
      list.filter((text) => {
        if (value === text) {
          return false;
        } else {
          return true;
        }
      })
    );
  };

  // const offModify = (text) => {
  //   setList(
  //     list.map((value) => {
  //       if ("텍스트 수정" == text) {
  //         return value;
  //       } else {
  //         return text;
  //       }

  //     })
  //   );
  // };

  const onDeleteIdx = (idx) => {
    setList((currentValue) => {
      const newList = [...currentValue];
      newList.splice(idx, 1);
      return newList;
    });
  };

  const onModifyIdx = (idx) => {
    setList((currentValue) => {
      const newList = [...currentValue];
      newList[idx] = "다른텍스트";
      return newList;
    });
  };

  return (
    <div className="mainContainer">
      <h1>제목</h1>

      <input type="text" ref={data} />
      <button onClick={inputClick}>input Clicked</button>
      {list.map((value, idx) => {
        return (
          <div key={idx}>
            <div>{value}</div>
            <button onClick={() => onModify(value)}>수정하기</button>
            <button onClick={() => onDelete(value)}>삭제하기</button>

            <button onClick={() => onModifyIdx(idx)}>수정하기</button>
            <button onClick={() => onDeleteIdx(idx)}>삭제하기</button>
          </div>
        );
      })}
      <button onClick={onClick} className="bottomButton">
        추가하기
      </button>
    </div>
  );
}

export default App;
