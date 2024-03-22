import React, { useState } from 'react';

function Gallery() {
  // 사진 목록을 담을 배열 상태를 생성합니다.
  const [photos, setPhotos] = useState([]);
  // 새로운 사진의 URL을 입력받을 상태를 생성합니다.
  const [newPhotoUrl, setNewPhotoUrl] = useState('');

  // 새로운 사진을 추가하는 함수
  const addPhoto = () => {
    if (newPhotoUrl.trim() !== '') {
      setPhotos([...photos, newPhotoUrl]);
      setNewPhotoUrl(''); // 새로운 사진 입력 필드를 초기화합니다.
    }
  };

  return (
    <div>
      <h2>Photo Gallery</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* 사진 목록을 화면에 출력합니다. */}
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index}`}
            style={{ width: '300px', height: 'auto', margin: '5px' }}
          />
        ))}
      </div>
      {/* 새로운 사진을 입력받는 입력 필드 */}
      <input
        type="text"
        value={newPhotoUrl}
        onChange={(e) => setNewPhotoUrl(e.target.value)}
        placeholder="Enter photo URL"
      />
      {/* 새로운 사진을 추가하는 버튼 */}
      <button onClick={addPhoto}>Add Photo</button>
    </div>
  );
}

export default Gallery;
