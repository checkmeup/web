export const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>
        In order to get started with the app I need to write some requirements and user stories. Then I will start to
        realize the app and deploy it somewhere.
      </p>
      <h2>Requirements</h2>
      <p>
        The app should be able to monitor cron jobs. It should be able to send notifications when a cron job fails. It
        should be able to send notifications when a cron job is not running. It should be able to send notifications
        when a cron job is running for too long. Let's start with couple of user stories for begining
      </p>
      <h3>Authentication</h3>
      <ul>
        <li>As a user I want to register so I can get notifications about the cron jobs I am interested in.</li>
        <li>As a user I want to login so that I can access my account.</li>
        <li>As a user I want to logout so that I can protect my account.</li>
        <li>As a user I want to reset my password so that I can recover my account.</li>
        <li>As a user I want to change my account settings so that I can manage my account.</li>
      </ul>
      <h3>Monitoring Management</h3>
      <ul>
        <li>As a user I want to add a monitor so that I can get notifications about the cron job fails.</li>
        <li>As a user I want to remove a monitor so that I can stop getting notifications about the cron job.</li>
      </ul>
      <h3>Event Listener</h3>
      <ul>
        <li>As a system I want to receive event when a cron job starts so that I can store and analyze it.</li>
        <li>As a system I want to receive event when a cron job stops so that I can store and analyze it.</li>
        <li>As a system I want to analyze the cron job's data so that I can send notifications when it fails.</li>
      </ul>
      <h3>Notification</h3>
      <ul>
        <li>As a user I want to receive email notification when a cron job fails so that I can fix it.</li>
      </ul>
    </div>
  )
}
