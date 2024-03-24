export const StatsPage = () => {
  return (
    <div>
      <h1>Stats</h1>
      <h2>Finances and Expenses</h2>
      <p>
        The app should be open source and transparent for any aspect of it. It should be able to run on a free tier of
        monitoring and notifications. For begining I will start to log all my efforts and expenses in the project. It
        should provide a good overview of the project and the costs of running it for any potential users and
        contributors.
      </p>
      <table width={'100%'}>
        <thead>
          <tr>
            <th align="left">Date</th>
            <th align="left">Effort</th>
            <th align="right">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>19/03/2024</td>
            <td>Website initial setup and deploy implementation</td>
            <td align="right">4 hours</td>
          </tr>
          <tr>
            <td>20/03/2024</td>
            <td>Add layout and adjust code to FSD structure</td>
            <td align="right">2 hours</td>
          </tr>
          <tr>
            <td>21/03/2024</td>
            <td>Implement top navigation header and fix minor issues in the pages</td>
            <td align="right">2 hours</td>
          </tr>
          <tr>
            <td>23/03/2024</td>
            <td>Move to Netlify deployment and fix active mark on the top navigation</td>
            <td align="right">3 hours</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
