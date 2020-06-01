console.log($);

const screen_cast = () => {
  $(".screen").prepend("<div class='new'><h3>Some Information</h3><div>");
};
const joke = () => {
  $(".btn_2").click(function() {
    $.ajax({
      url: "https://sv443.net/jokeapi/v2/joke/Programming",
      success: function(result) {
        $(".screen").append(result["joke"]);
        console.log(result["joke"]);
      }
    });
  });
};
const undecided_algo = () => {
  nput = $(".algo").val();
  $(".meal_container").text(" ");
  name_arr = nput.split("");
  for (i = 0; i < name_arr.length; i++) {
    lucky_char = name_arr[i];
    $.ajax({
      url: `https://www.themealdb.com/api/json/v1/1/search.php?f=${lucky_char}`,
      success: function(meal) {
        hint = meal["meals"][1]["strMeal"];

        $(".meal_container")
          .append("<div></div>")
          .append(hint);
      }
    });
  }

  console.log(nput);
};
const meal = () => {
  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/random.php",
    success: function(rtrn) {
      $(".screen").append(rtrn["meals"][0]["strMeal"]);
      console.log(rtrn);
      $(".text_box").append(rtrn["meals"][0]["strInstructions"]);
    }
  });
};
const cocktail = () => {
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    success: function(data) {
      $(".screen")
        .append(data["drinks"][0]["strDrink"])
        .append(
          "<img src='https://media.giphy.com/media/uDvz51Hu6PONi/giphy.gif'></img>"
        );

      // $(".screen").append("<div></div>");

      $(".text_box").append(
        "[ Descrip ]    " + data["drinks"][0]["strInstructions"]
      );
      $(".screen").prepend("<div></div>");
      $(".text)box").append("Ingredients :" + data["drinks"][0]["strDrink"]);

      console.log(data["drinks"][0]);
    }
  });
};
