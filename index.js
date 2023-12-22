// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "12월이 찾아오고, 우리가 함께하는 순간들이 길어지고있어" },
  { "number": 2, "message": "내가 부모님하고 강릉여행 갔던날, 생딸기를 같이 먹자고 했지." },
  { "number": 3, "message": "그뒤로 우린 처음으로 같이 대전여행을 갔어!" },
  { "number": 4, "message": "여행 내내 즐거워보였고, 이렇게 재미있는 사진도 만들었다구~" },
  { "number": 5, "message": "같이 차타고 독립기념관 여행갔을때의 신나하는 네 모습이 떠올랐어" },
  { "number": 6, "message": "옷을 사주고싶어져서 막 열심히 골랐다가 부모님께 신나게 혼나기도 했지만.." },
  { "number": 7, "message": "전역하는 날에 그 전에도 이렇게 잔뜩 추억을 공유했어 감동적이었어.." },
  { "number": 8, "message": "네가 학원을 다니게 되고 함께하고 기다리며 붕어빵도 같이 먹고" },
  { "number": 9, "message": "머리 자르고 파마하게 된 너는 더욱더 귀여워졌어 잔뜩!" },
  { "number": 10, "message": "그리고 농담처럼 얘기하던 생딸기 설빙을 먹고 둘 다 무척 감동했어" },
  { "number": 11, "message": "그 후로는 둘이서 얘기하면서 이력서도 같이 완성하고" },
  { "number": 12, "message": "그때 키보드도 빌려줘서 너무 고마워서 열심히 새것처럼 청소도 했지" },
  { "number": 13, "message": "저번 부산 여행 갔을때 기억나? 지금 이순간보다 한달도 더 전 일이야 이게!" },
  { "number": 14, "message": "우리 둘이서 막 영상통화하면서 진심으로 많이 웃고 행복했어 너무 좋았다구" },
  { "number": 15, "message": "짜잔 내 사진도 있지롱 네모습만 보이면 불공평하니까!" },
  { "number": 16, "message": "너와 함께하는 겨울은 붕어빵을 먹는 네 모습이 정말 기억에 많이 남아 너무너무 귀여워서" },
  { "number": 17, "message": "일주일 전에는 우리 알투비트 커플도 되고 막 열심히 코디도 맞추고 그랬다! 여기서도 함께해서 좋았어" },
  { "number": 18, "message": "스무살때 사진 보내줬는데 아니 이때 모습 그냥 사긴데 지금이 더쩔긴하지만 사랑스러워!!" },
  { "number": 19, "message": "우리가 만나고 사랑하면서 크고작은 일들이 있었지 이렇게 우울하게도 만들었지만" },
  { "number": 20, "message": "이렇게 표정을 감추지 못할만큼 행복하게도 많이 만들었어! 항상 볼때마다 나의 에너지가 돼" },
  { "number": 21, "message": "어울리지 않는다고 하지만 정말 열심히 꾸민 흔적이 보이는 크록스는 진짜 사랑스러웠어" },
  { "number": 22, "message": "이제 함께하면서 여기도 다시 가고 맛있는것도 잔뜩 같이 먹자 행복하게" },
  { "number": 23, "message": "너와 함께먹은 점심은 너무 최고였고, 여기는 내 작은 선물이야. 물론 지비츠도 있지!" },
  { "number": 24, "message": "혜린이를 진심으로 사랑하고 우리의 100일을 축하하며 이 달력을 마무리해. 늘 네 곁에 있을게 사랑해♥" }
];

