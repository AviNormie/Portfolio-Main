import React from 'react'
// import SplitText from "./SplitText";
// import SplitText from "./SplitText";
import SplitText from './blocks/TextAnimations/SplitText/SplitText';
function App() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
  return (
    <div className='bg-green-200'>
      <SplitText
        text="Hello,aaaaaaaaaaaahhhhhhh Tailwind!"
        className="text-2xl text-black  font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  )
}

export default App