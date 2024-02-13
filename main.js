// Top o'quvchilar ro'yxati
const topStudents = ['Shoxruh', 'Axrorbek', 'Azizbek'];

// Foydalanuvchidan ma'lumot olish
const userInput = prompt('Xonamizda top 3 oquchilar bu kimlar? Har bir isimdan keyin vergul qoyib keting');

// Foydalanuvchining kiritgan ma'lumotni tekshirish
if (userInput) {
    // Kiritilgan ma'lumotni bo'shliklarga bo'lib bo'lmagan joylarini olib tashlash
    const inputNames = userInput.split(',').map(name => name.trim());

    // Tekshirish va foydalanuvchiga javob berish
    const isCorrect = topStudents.every(student => inputNames.includes(student));

    if (isCorrect) {
        alert('Siz to\'g\'ri javob berdingiz! Bravo!');
    } else {
        alert('Siz top o\'quvchilarni topa olmadingiz javobni korish uchun OK ni bosing!');
    }
} else {
    alert('Foydalanuvchi javob kiritmadi!');
}

document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("Ko'chirish taqiqlanadi!");
});
