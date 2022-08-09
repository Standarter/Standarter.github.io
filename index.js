SpinPressed = false;
function AddElementToCase()
{
    if (document.getElementById("TextWithGames") != "")
    {
        var ItemsList = document.getElementById("TextWithGames").value.split("\n");
        localStorage.setItem("TextWithGames", document.getElementById("TextWithGames").value);
        for (var Count = 0; Count < 2; Count++)
        {
            for (var ItemIndex = 0; ItemIndex < ItemsList.length; ItemIndex++)
            {
            var CreatedItem = document.createElement("div");
            CreatedItem.className = "Item";
            CreatedItem.style = "left: 0px;";
            CreatedItem.innerHTML = '<div id="ItemText">' + String(ItemsList[ItemIndex]) + '</div>';
            document.getElementById("Table").append(CreatedItem);
            }
        }
    }
}
function OnLoadPage()
{
    var Items = document.querySelectorAll(".Item");
    for (var ElementIndex = 0; ElementIndex < Array.from(Items).length; ElementIndex++)
    {
        Items[ElementIndex].style.left = 0 + "px";
    }
    if (localStorage.getItem("TextWithGames") != null)
    {
        document.getElementById("TextWithGames").value = localStorage.getItem("TextWithGames");
    } 
}
function SpinButton()
{
    var Items = document.querySelectorAll(".Item");
    if (SpinPressed == false)
    {
        if (Array.from(Items).length > 0)
        {
            OnButtonClick2();
        }
        document.getElementById("ButtonSpin").style.backgroundColor = "7a7a7a";
        SpinPressed = true;
        var RandomInput = Math.random(); 
        for (var ElementIndex = 0; ElementIndex < Array.from(Items).length; ElementIndex++)
        {
            Items[ElementIndex].style.left = parseInt(Items[ElementIndex].style.left) + parseInt(-(250)*Array.from(Items).length*RandomInput) + "px";
        }
    }
}
function ResetButton()
{
    if (SpinPressed == true)
    {
        document.getElementById("ButtonSpin").style.backgroundColor = "#212121";
        SpinPressed = false;
        var Items = document.querySelectorAll(".Item");
        var RandomInput = Math.random(); 
        for (var ElementIndex = 0; ElementIndex < Array.from(Items).length; ElementIndex++)
        {
            Items[ElementIndex].style.left = 0 + "px";
        }
    }
}
function OnButtonClick1()
{
    document.getElementById("OnClick1").volume = 0.3;
    document.getElementById("OnClick1").play();
}
function OnButtonClick2()
{
    document.getElementById("OnClick2").volume = 0.5;
    document.getElementById("OnClick2").play();
}
function OnButtonClick3()
{
    document.getElementById("OnClick3").volume = 0.1;
    document.getElementById("OnClick3").play();
}