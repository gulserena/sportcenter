// sayfa kaydırılınca header renk değişimi için
window.addEventListener('scroll', function() { 
    let header = document.querySelector('header');
    let show = document.querySelector("#navbar");
    let scrollPosition = window.scrollY;
    
    if (scrollPosition > 20) {
        header.style.backgroundColor = '#325492'; 
        show.style.backgroundColor ='#325492';
    }else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        show.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    }
});

//hamburger-menu
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector("header nav");
    const hamburger = document.querySelector(".hamburger-menu");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});



function showContent(contentType) {
    console.log("showContent called with contentType:", contentType);
  
    // Tüm içerikleri gizle
    var contents = document.querySelectorAll('.content-container');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Aktif butonu sıfırla
    var buttons = document.querySelectorAll('.class-button');
    buttons.forEach(function(button) {
    button.classList.remove('active');
    });

    // İlgili içeriği göster
    var contentToShow = document.getElementById(contentType + 'Content');
    console.log("contentToShow:", contentToShow);

    // Tıklanan butonu aktif yap
    var activeButton = document.querySelector('.class-button[data-content="' + contentType + '"]');
    console.log("activeButton:", activeButton);

    //butona tıklandığında içeriği göster ve mobile uygun hale getir
    if (contentToShow) {
        contentToShow.style.display = 'flex';
        if (window.innerWidth <= 600) {
            contentToShow.style.flexDirection = 'column';
        }
    }

    if (activeButton) {
        activeButton.classList.add('active'); // Aktif butona .active sınıfını ekle
    }
}



//BMI hesaplama

function calculateBMI() {
    let heightInput = document.getElementById("inputHeight").value;
    let weightInput = document.getElementById("inputWeight").value;
    let resultDisplay = document.getElementById("bmiResult");
    let progressBar = document.getElementById("progress-bar");

    // Kullanıcının geçerli bir değer girip girmediğini kontrol et
    if (heightInput === "" || weightInput === "" || isNaN(heightInput) || isNaN(weightInput)) {
        resultDisplay.innerHTML = "Lütfen geçerli bir boy ve kilo giriniz!";
        resultDisplay.style.color = "red";
        progressBar.style.width = "0%"; // Hata durumunda çubuğu sıfırla
        return;
    }

    // String olarak gelen değerleri sayıya çevir
    let heightInMeters = parseFloat(heightInput) / 100; // cm'yi metreye çevir
    let weightInKg = parseFloat(weightInput);

    // BMI hesapla
    let bmi = weightInKg / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(2); // Virgülden sonra 2 basamak göster

    // Sonucu ekrana yazdır
    resultDisplay.style.color = "black";
    resultDisplay.innerHTML = `Vücut Kitle İndeksiniz: <strong>${bmi}</strong>`;

    // BMI Kategorisini belirle
    let category = "";
    let progressWidth = 0;
    if (bmi < 18.5) {
        category = "UNDER WEIGHT";
        progressWidth = 20;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "NORMAL";
        progressWidth = 50;
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "OVER WEIGHT";
        progressWidth = 75;
    } else if(bmi >= 30 && bmi < 34.9) {
        category = "OBESE";
        progressWidth = 90;
    } else if (bmi >= 35) {
        category = "EXTREMELY OBESE";
        progressWidth = 100;
    }

    resultDisplay.innerHTML += `<br> Kategori: <strong>${category}</strong>`;

    if(progressBar){
    // Çubuğun genişliğini BMI'ye göre ayarla
    progressBar.style.width = progressWidth + "%";
    updateProgressBarColor(progressWidth);
}
}

// Çubuğun rengini BMI'ye göre ayarlama
function updateProgressBarColor(progressWidth) {
    let progressBar = document.getElementById("progress-bar");
    if (progressWidth <= 20) {
        progressBar.style.backgroundColor = "blue"; 
    } else if (progressWidth <= 50) {
        progressBar.style.backgroundColor = "green"; 
    } else if(progressWidth<=75){
        progressBar.style.backgroundColor = "yellow"; 
    }
    else if(progressWidth<=90){
        progressBar.style.backgroundColor="orange"
    }
    else {
        progressBar.style.backgroundColor="red";
    }
}

function resetBMI() {
    document.getElementById("inputHeight").value = "";
    document.getElementById("inputWeight").value = "";
    document.getElementById("bmiResult").innerHTML = "";
    document.getElementById("progress-bar").style.width = "0%"; // Çubuğu sıfırla
}

// Sayfanın aşağı kaydığında butonu göster
window.onscroll = function () {
    let button = document.getElementById("topBtn");
    if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Sayfanın Üstüne Gitme Fonksiyonu
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
