const prevos = document.getElementById('prevos');
const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');
const likesCount = document.getElementById('likes-count');
const dislikesCount = document.getElementById('dislikes-count');
const removeLikeBtn = document.getElementById('remove-like-btn');
const removeDislikeBtn = document.getElementById('remove-dislike-btn');

// Initialize likes and dislikes counts from localStorage
const likes = localStorage.getItem('likes') || 0;
const dislikes = localStorage.getItem('dislikes') || 0;

likesCount.textContent = likes;
dislikesCount.textContent = dislikes;

// Add event listeners to like and dislike buttons
likeBtn.addEventListener('click', () => {
  const newLikes = parseInt(likes) + 1;
  localStorage.setItem('likes', newLikes);
  likesCount.textContent = newLikes;
});

dislikeBtn.addEventListener('click', () => {
  const newDislikes = parseInt(dislikes) + 1;
  localStorage.setItem('dislikes', newDislikes);
  dislikesCount.textContent = newDislikes;
});

// Add event listeners to remove like and dislike buttons
removeLikeBtn.addEventListener('click', () => {
  const newLikes = parseInt(likes) - 1;
  if (newLikes < 0) {
    newLikes = 0;
  }
  localStorage.setItem('likes', newLikes);
  likesCount.textContent = newLikes;
});

removeDislikeBtn.addEventListener('click', () => {
  const newDislikes = parseInt(dislikes) - 1;
  if (newDislikes < 0) {
    newDislikes = 0;
  }
  localStorage.setItem('dislikes', newDislikes);
  dislikesCount.textContent = newDislikes;
});





const subscribeBtn = document.getElementById('subscribe-btn');
    const subscriptionStatus = document.getElementById('subscription-status');
    let isSubscribed = false;

    subscribeBtn.addEventListener('click', () => {
      if (!isSubscribed) {
        isSubscribed = true;
        subscriptionStatus.textContent = 'Subscribed';
        subscribeBtn.disabled = true;
      } else {
        alert('You are already subscribed!');
      }
    });