<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Form Nilai Ujian</title>
</head>
<body>

<form method="post" action="">
    <h3>Form Nilai Ujian</h3>
    <label>Nama:</label>
    <input type="text" name="nama" required>

    <label>Email:</label>
    <input type="email" name="email" required>

    <label>Nilai Ujian:</label>
    <input type="number" name="nilai" required>

    <button type="submit" name="submit">Kirim</button>
</form>

<?php
// Proses data setelah tombol submit ditekan
if (isset($_POST['submit'])) {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $nilai = $_POST['nilai'];

    // Struktur kendali IF ELSE
    if ($nilai > 70) {
        $status = "Lulus";
    } else {
        $status = "Remedial";
    }

    // Tampilkan hasil
    echo "<hr>";
    echo "<h3>Hasil Penilaian</h3>";
    echo "Nama: $nama <br>";
    echo "Email: $email <br>";
    echo "Nilai: $nilai <br>";
    echo "Status: <b>$status</b>";
}
?>

</body>
</html>
