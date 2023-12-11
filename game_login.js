function addUser() {
  
  player1_name_imput = document.getElementById("player1_name_input").value;
  player2_name_imput = document.getElementById("player2_name_input").value;

  localStorage.setItem("player1_name_imput", player1_name_imput);
  localStorage.setItem("player2_name_imput", player2_name_imput);

  window.location = "game_page.html";
}

