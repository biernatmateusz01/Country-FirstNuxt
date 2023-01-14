<template>
  <div
    class="w-screen h-screen fixed flex items-center justify-center top-0 left-0 z-50 bg-emerald-500 text-white"
  >
    <span class="loader"></span>
  </div>
</template>

<style scoped>
.loader {
  font-size: 48px;
  color: #fff;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  position: relative;
}
.loader:before {
  content: "";
  animation: 5s print linear alternate infinite;
}
.loader:after {
  content: "";
  position: absolute;
  right: -4px;
  top: 50%;
  transform: translatey(-45%);
  width: 2px;
  height: 1.3em;
  background: currentColor;
  opacity: 0.8;
  animation: 1s blink steps(2) infinite;
}

@keyframes blink {
  0% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
@keyframes print {
  0% {
    content: "L";
  }
  10% {
    content: "Lo";
  }
  20% {
    content: "Loa";
  }
  30% {
    content: "Load";
  }
  40% {
    content: "Loadi";
  }
  50% {
    content: "Loadin";
  }
  60% {
    content: "Loading";
  }
  70% {
    content: "Loading.";
  }
  80% {
    content: "Loading..";
  }
  90%,
  100% {
    content: "Loading...";
  }
}
</style>
