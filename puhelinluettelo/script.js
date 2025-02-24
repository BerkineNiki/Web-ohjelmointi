$(document).ready(function () {
  let testidata = [
    { nimi: "Ankka Aku", puhelin: "050-4324333" },
    { nimi: "Hopo Hessu", puhelin: "044-1111222" },
    { nimi: "Naamio Musta", puhelin: "044-4324234" },
    { nimi: "Ankka Iines", puhelin: "050-3333444" },
  ];

  if (window.location.pathname.includes("taulukko.html")) {
    $.getJSON("http://a41d.k.time4vps.cloud:3001/henkilot", function (data) {
      let tableBody = $("#puhelinluettelo tbody");
      tableBody.empty();
      $.each(data, function (key, person) {
        tableBody.append(
          `<tr><td>${person.nimi}</td><td>${person.puhelin}</td></tr>`
        );
      });
    });
  }

  if (window.location.pathname.includes("haku.html")) {
    $("#hae").click(function () {
      let nimi = $("#nimi").val().trim();
      if (nimi === "") {
        alert("Anna nimi!");
        return;
      }

      $.getJSON("http://a41d.k.time4vps.cloud:3001/henkilot", function (data) {
        let numero = "Ei löydy";
        $.each(data, function (key, person) {
          if (person.nimi.toLowerCase() === nimi.toLowerCase()) {
            numero = person.puhelin;
          }
        });
        $("#puhelin").val(numero);
      });
    });
  }
});
