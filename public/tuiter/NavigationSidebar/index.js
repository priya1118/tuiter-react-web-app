const NavigationSidebar = (active) => {
    const links = [
        { title: 'Home', icon: 'fa-home', href: '../HomeScreen/home.html' },
        { title: 'Explore', icon: 'fa-hashtag', href: '../explore/index.html' },
        { title: 'Notifications', icon: 'fa-bell', href: 'notifications.html' },
        { title: 'Messages', icon: 'fa-envelope', href: 'messages.html' },
        { title: 'Bookmarks', icon: 'fa-bookmark', href: 'bookmarks.html' },
        { title: 'Lists', icon: 'fa-list', href: 'lists.html' },
        { title: 'Profile', icon: 'fa-user', href: 'profile.html' },
        { title: 'More', icon: 'fa-circle', href: 'more.html' },
    ];

    return `
    <div class="list-group">
      <a class="list-group-item" href="#">
        <i class="fab fa-twitter"></i>
      </a>
      ${links
        .map(
            (link) => `
            <a class="list-group-item ${
                link.title === active ? 'active' : ''
            }" href="${link.href}">
              <i class="fa ${link.icon}">
                <text class="m-2">${link.title}</text>
              </i>
            </a>
          `
        )
        .join('')}
    </div>
    <div class="d-grid mt-2">
      <a
        href="tweet.html"
        class="btn btn-primary btn-block rounded-pill"
      >
        Tweet
      </a>
    </div>
  `;
};

export default NavigationSidebar;
