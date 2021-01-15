import { useEffect } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import LineTo from 'react-lineto';

const setContent = () => {
  state.window = {
    height: window.innerHeight,
    width: window.innerWidth
  };
};

let state = observable({
  window: {
    height: window.innerHeight,
    width: window.innerWidth
  }
});

const App = observer(() => {

  useEffect(()=>{
     window.addEventListener('resize', setContent);
  });
  const style = {padding:"50px", width:"80%", backgroundColor:"#ddd"};
  return (
    <div>
      <p style={style} className="A" dataMsg={state.window.height}>ElementA</p>
      <p style={style} className="B">ElementB</p>
      <LineTo from="A" to="B" />
    </div>
  );
}); 
export default App;
