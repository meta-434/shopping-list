$(document).ready(function() {
    $("button[type=submit]").on('click', function(e){
        e.preventDefault();
        let item = ($('#shopping-list-entry').val() === '') ? ('broccoli') : ($('#shopping-list-entry').val());

        $("ul[class=shopping-list]").append($(`<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`));
    });

    $('ul').on("click", "button[class=shopping-item-toggle]", function(e){
        $( e.target ).closest("li").find("span[class*=shopping-item]").toggleClass("shopping-item__checked");
    });

    $("ul").on('click', "button[class=shopping-item-delete]", function(e){
        $( e.target ).closest("li").detach();
    });
});