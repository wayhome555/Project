<template>
    <div class="start">
      <div class="title">
        <h1 data-text="CarWiser">CarWiser</h1>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="css" scoped>
  .start {
    color: lightcyan;
    font-family: "Times New Roman", Times, serif;
    min-height: 92vh;
    background: url('https://img.tukuppt.com/ad_preview/00/08/56/5c9905d71ee23.jpg!/fw/980');
    background-size: cover;
    margin: 0.5rem 0.5rem 2.5rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
  }
  
  h1 {
  color: #f7f3f3;
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 5rem; /* 根据需要调整 */
  letter-spacing: -0.3rem; /* 根据需要调整 */
  position: relative;
}

h1::after {
  content: attr(data-text);
  color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  clip-path: circle(100px at 0% 50%);
  animation: movelight 3s infinite;
  background: url("https://bpic.588ku.com/back_our/20211025/bg/2f393bbe1882515f7f908260022698da_109538.png") no-repeat center center;
  background-size: cover;
  background-clip: text;
}
  @keyframes movelight {
    0% {
      clip-path: circle(100px at 0% 50%);
    }
    50% {
      clip-path: circle(100px at 100% 50%);
    }
    100% {
      clip-path: circle(100px at 0% 50%);
    }
  }
  </style>