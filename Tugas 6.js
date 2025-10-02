import users from './data.js';

const index = () => {
  console.log("📋 Daftar Pengguna:");
  users.map(({ nama, umur, alamat, email }, index) => {
    console.log(`${index + 1}. ${nama}, ${umur} tahun, ${alamat}, ${email}`);
  });
};

const store = () => {
  users.push(
    { nama: 'Fajar', umur: 30, alamat: 'Jl. Data 11', email: 'fajar@example.com' },
    { nama: 'Rina', umur: 31, alamat: 'Jl. Data 12', email: 'rina@example.com' }
  );
  console.log("✅ Data berhasil ditambahkan.");
};


const hapusData = (namaTarget) => {
  const index = users.findIndex(user => user.nama === namaTarget);
  if (index !== -1) {
    const [terhapus] = users.splice(index, 1);
    console.log(`🗑️ Data ${terhapus.nama} berhasil dihapus.`);
  } else {
    console.log(`⚠️ Data dengan nama '${namaTarget}' tidak ditemukan.`);
  }
};

index();
store();
hapusData('Lala');
index();