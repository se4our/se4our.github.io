(function() {
    window.addEventListener('load', init);
    function init() {
      document.getElementById("to_be_continued1").addEventListener("click", to_be_continued1);   
      document.getElementById("to_be_continued2").addEventListener("click", to_be_continued2);
      document.getElementById("backward1").addEventListener("click", backward1);   
      document.getElementById("backward2").addEventListener("click", backward2);   
    }
    function to_be_continued1() {
      document.getElementById("t1").style.display = "none";
      document.getElementById("t2").style.display = "none";
      document.getElementById("t3").style.display = "block";
      document.getElementById("t4").style.display = "block";
      document.getElementById("t5").style.display = "block";
      document.getElementById("t6").style.display = "block";
      document.getElementById("to_be_continued1").style.display = "none";
      document.getElementById("to_be_continued2").style.display = "block";
      document.getElementById("backward1").style.display = "block";
    }
    function to_be_continued2() {
      document.getElementById("t3").style.display = "none";
      document.getElementById("t4").style.display = "none";
      document.getElementById("t5").style.display = "none";
      document.getElementById("t6").style.display = "none";
      document.getElementById("t7").style.display = "block";
      document.getElementById("t8").style.display = "block";
      document.getElementById("to_be_continued2").style.display = "none";
      document.getElementById("backward1").style.display = "none";
      document.getElementById("backward2").style.display = "block";
  }
  function backward1() {
      document.getElementById("t1").style.display = "block";
      document.getElementById("t2").style.display = "block";
      document.getElementById("t3").style.display = "none";
      document.getElementById("t4").style.display = "none";
      document.getElementById("t5").style.display = "none";
      document.getElementById("t6").style.display = "none";
      document.getElementById("to_be_continued1").style.display = "block";
      document.getElementById("to_be_continued2").style.display = "none";
      document.getElementById("backward1").style.display = "none";
  }
  function backward2() {
      document.getElementById("t3").style.display = "block";
      document.getElementById("t4").style.display = "block";
      document.getElementById("t5").style.display = "block";
      document.getElementById("t6").style.display = "block";
      document.getElementById("t7").style.display = "none";
      document.getElementById("t8").style.display = "none";
      document.getElementById("to_be_continued2").style.display = "block";
      document.getElementById("backward1").style.display = "block";
      document.getElementById("backward2").style.display = "none";
  }
});