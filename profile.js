function addProfile() {

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var terpmail = document.getElementById("terpmail").value;
    var uid = document.getElementById("id").value;



    // Your data (replace this with your actual data)
    var csvContent = firstname + "," + lastname + "," + terpmail + "," + uid + "\n";

    // Create a Blob containing the CSV data
    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a temporary link element
    var link = document.createElement("a");

    // Set the link's attributes
    link.href = URL.createObjectURL(blob);
    link.target = "_blank";
    link.download = "profiles.csv";

    // Trigger a click on the link to start the download
    link.click();
}