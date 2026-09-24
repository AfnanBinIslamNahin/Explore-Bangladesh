import { writeFileSync } from 'fs';

interface DistrictPhotoTarget {
  id: string;
  name: string;
  query: string;
}

const targets: DistrictPhotoTarget[] = [
  // Dhaka Division
  { id: 'dhaka', name: 'Dhaka', query: 'Lalbagh Fort Dhaka' },
  { id: 'gazipur', name: 'Gazipur', query: 'Bhawal National Park' },
  { id: 'narayanganj', name: 'Narayanganj', query: 'Panam Nagar Sonargaon' },
  { id: 'narsingdi', name: 'Narsingdi', query: 'Wari-Bateshwar' },
  { id: 'tangail', name: 'Tangail', query: 'Atia Mosque Tangail' },
  { id: 'kishoreganj', name: 'Kishoreganj', query: 'Nikli Haor Kishoreganj' },
  { id: 'manikganj', name: 'Manikganj', query: 'Baliati Palace Manikganj' },
  { id: 'munshiganj', name: 'Munshiganj', query: 'Idrakpur Fort Munshiganj' },
  { id: 'rajbari', name: 'Rajbari', query: 'Rajbari Bangladesh railway' },
  { id: 'faridpur', name: 'Faridpur', query: 'Jasimuddin Faridpur' },
  { id: 'madaripur', name: 'Madaripur', query: 'Madaripur Shakuni Lake' },
  { id: 'shariatpur', name: 'Shariatpur', query: 'Shariatpur Bangladesh' },
  { id: 'gopalganj', name: 'Gopalganj', query: 'Tungipara Gopalganj' },

  // Chattogram Division
  { id: 'chattogram', name: 'Chattogram', query: 'Patenga Beach Chittagong' },
  { id: 'coxs-bazar', name: 'Cox\'s Bazar', query: 'Cox\'s Bazar sea beach' },
  { id: 'cumilla', name: 'Cumilla', query: 'Shalban Vihara Mainamati' },
  { id: 'feni', name: 'Feni', query: 'Muhuri Project Feni' },
  { id: 'brahmanbaria', name: 'Brahmanbaria', query: 'Brahmanbaria Bangladesh' },
  { id: 'rangamati', name: 'Rangamati', query: 'Kaptai Lake Rangamati' },
  { id: 'bandarban', name: 'Bandarban', query: 'Nilgiri Bandarban' },
  { id: 'khagrachhari', name: 'Khagrachhari', query: 'Alutila Cave Khagrachhari' },
  { id: 'noakhali', name: 'Noakhali', query: 'Nijhum Dwip Noakhali' },
  { id: 'lakshmipur', name: 'Lakshmipur', query: 'Lakshmipur Bangladesh' },
  { id: 'chandpur', name: 'Chandpur', query: 'Chandpur Mohona Bangladesh' },

  // Sylhet Division
  { id: 'sylhet', name: 'Sylhet', query: 'Jaflong Sylhet' },
  { id: 'moulvibazar', name: 'Moulvibazar', query: 'Sreemangal tea garden' },
  { id: 'habiganj', name: 'Habiganj', query: 'Satchari National Park' },
  { id: 'sunamganj', name: 'Sunamganj', query: 'Tanguar haor Bangladesh' },

  // Khulna Division
  { id: 'khulna', name: 'Khulna', query: 'Sundarbans Bangladesh' },
  { id: 'bagerhat', name: 'Bagerhat', query: 'Sixty Dome Mosque Bagerhat' },
  { id: 'satkhira', name: 'Satkhira', query: 'Satkhira Sundarbans' },
  { id: 'jashore', name: 'Jashore', query: 'Michael Madhusudan Dutt Jessore' },
  { id: 'jhenaidah', name: 'Jhenaidah', query: 'Jhenaidah Bangladesh mosque' },
  { id: 'magura', name: 'Magura', query: 'Magura Bangladesh' },
  { id: 'narail', name: 'Narail', query: 'SM Sultan Narail' },
  { id: 'kushtia', name: 'Kushtia', query: 'Lalon Shah Kushtia' },
  { id: 'chuadanga', name: 'Chuadanga', query: 'Chuadanga Bangladesh' },
  { id: 'meherpur', name: 'Meherpur', query: 'Mujibnagar Memorial' },

  // Rajshahi Division
  { id: 'rajshahi', name: 'Rajshahi', query: 'Puthia Temple Rajshahi' },
  { id: 'naogaon', name: 'Naogaon', query: 'Somapura Mahavihara' },
  { id: 'natore', name: 'Natore', query: 'Uttara Ganabhaban Natore' },
  { id: 'chapainawabganj', name: 'Chapainawabganj', query: 'Choto Sona Mosque' },
  { id: 'bogura', name: 'Bogura', query: 'Mahasthangarh Bogra' },
  { id: 'joypurhat', name: 'Joypurhat', query: 'Joypurhat Bangladesh' },
  { id: 'pabna', name: 'Pabna', query: 'Hardinge Bridge Pabna' },
  { id: 'sirajganj', name: 'Sirajganj', query: 'Jamuna Bridge Sirajganj' },

  // Barishal Division
  { id: 'barishal', name: 'Barishal', query: 'Guthia Mosque Barisal' },
  { id: 'patuakhali', name: 'Patuakhali', query: 'Kuakata Beach' },
  { id: 'bhola', name: 'Bhola', query: 'Monpura Bhola Bangladesh' },
  { id: 'pirojpur', name: 'Pirojpur', query: 'Pirojpur Bangladesh river' },
  { id: 'jhalakathi', name: 'Jhalakathi', query: 'Bhimruli floating market' },
  { id: 'barguna', name: 'Barguna', query: 'Barguna Bangladesh beach' },

  // Rangpur Division
  { id: 'rangpur', name: 'Rangpur', query: 'Tajhat Palace Rangpur' },
  { id: 'dinajpur', name: 'Dinajpur', query: 'Kantajew Temple Dinajpur' },
  { id: 'gaibandha', name: 'Gaibandha', query: 'Gaibandha Jamuna Bangladesh' },
  { id: 'kurigram', name: 'Kurigram', query: 'Kurigram Dharla Bangladesh' },
  { id: 'lalmonirhat', name: 'Lalmonirhat', query: 'Teesta Barrage Lalmonirhat' },
  { id: 'nilphamari', name: 'Nilphamari', query: 'Nilsagar Nilphamari' },
  { id: 'panchagarh', name: 'Panchagarh', query: 'Tetulia Panchagarh' },
  { id: 'thakurgaon', name: 'Thakurgaon', query: 'Thakurgaon Bangladesh' },

  // Mymensingh Division
  { id: 'mymensingh', name: 'Mymensingh', query: 'Shashi Lodge Mymensingh' },
  { id: 'netrokona', name: 'Netrokona', query: 'Birishiri Netrokona' },
  { id: 'sherpur', name: 'Sherpur', query: 'Madhutila Sherpur' },
  { id: 'jamalpur', name: 'Jamalpur', query: 'Jamalpur Bangladesh river' },
];

async function searchCommons(query: string) {
  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|mime&format=json&gsrlimit=3`;
    const res = await fetch(url, { headers: { 'User-Agent': 'ExploreBangladeshResearch/1.0 (contact@explorebangladesh.org)' } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.query || !data.query.pages) return null;
    const pages = Object.values(data.query.pages) as any[];
    for (const page of pages) {
      const info = page.imageinfo?.[0];
      if (info && info.url && (info.mime === 'image/jpeg' || info.mime === 'image/png')) {
        // filter out maps, logos, flags, svg, icons
        const titleLower = (page.title || '').toLowerCase();
        if (titleLower.includes('map') || titleLower.includes('flag') || titleLower.includes('locator') || titleLower.includes('icon') || titleLower.includes('logo')) {
          continue;
        }
        return { title: page.title, url: info.url };
      }
    }
  } catch (e) {
    return null;
  }
  return null;
}

async function run() {
  const results: Record<string, { title: string; url: string } | null> = {};
  for (const t of targets) {
    const found = await searchCommons(t.query);
    results[t.id] = found;
    console.log(`${t.id} (${t.name}): ${found ? found.title : 'NOT FOUND'}`);
    await new Promise((r) => setTimeout(r, 200));
  }
  writeFileSync('scripts/district_photos.json', JSON.stringify(results, null, 2));
  console.log('Done writing scripts/district_photos.json');
}

run();
