/**
 * Created by Natalya on 07.01.2015.
 */


function showRecourceInfo(id) {
    document.getElementById('resourceStat').style.display = 'block';
    document.getElementById('resourceTitle').innerHTML = map[id].type;
    document.getElementById('resourceCount').innerHTML = map[id].resourceCount;
    document.getElementById('resourceRecovery').innerHTML = map[id].recovery;
}


function getCityLevel(cityid) {
    return map[cityid].level;
}

function drawPopupMenu(cityid)
{
    document.getElementById('cityTitle').innerHTML = getCityName(cityid);
    UpdatePopupMenu(cityid);
}

var levelUpPrice  = [100000,200000,300000,400000,500000,600000];

function levelUp(cityID) {

    var level = map[cityID].level;

    if (player.money > levelUpPrice[level - 1]) {
        if (level < 6)
            map[cityID].level++;

        UpdatePopupMenu();
    }
    else
    {
        alert("Недостаточно денег!");
    }
}

function UpdatePopupMenu(cityid) {

    var city = map[cityid];
    var level = city.level;
    var path = "url(\"./icon_and_textures/city" + level + ".png\")";
    document.getElementById('cityImg').style.backgroundImage = path;

    document.getElementById('cityLevel').innerHTML = level;
    if (level == 6) {
        document.getElementById('updateButton').style.display = 'none';
    }
    else {
        document.getElementById('updateButton').style.display = 'block';
    }
    document.getElementById('popupMenu').style.display = 'block';
    document.getElementById('popupMenu').setAttribute("alt", cityid);
    document.getElementById('cityProfit').innerHTML = GetCityProfit(cityid);

    document.getElementById('cityPopularity').innerHTML = city.popularity;
    document.getElementById('cityHappy').innerHTML = city.happy;
    document.getElementById('cityHealth').innerHTML = city.health;
    document.getElementById('cityCrime').innerHTML = city.crime;
    document.getElementById('cityUnemployment').innerHTML = city.unemployment;
    document.getElementById('citySalary').innerHTML = city.salary;
    document.getElementById('cityTaxes').innerHTML = city.taxes;
}

function getCityName(id) {
    return map[id].cityName;
}

function popupMenuClose() {
    document.getElementById('popupMenu').style.display = 'none';
}

function GetCityProfit(cityId)
{
    var city = map[cityId];

    var workingPeople =  city.popularity * (city.unemployment/100.0);
    var theirSalary = city.salary * (city.taxes/100.0);
    var cityProfit = workingPeople * theirSalary;
    return cityProfit;
}


function NextGameStep()
{

}