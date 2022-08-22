import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';
function GitHubStats() {
  return (
    <div>
      <GitProfile
        config={{
          github: {
            username: 'NeurologiaLogic',
            limit: 4,
            exclude: {
              forks: true, // Forked projects will not be displayed if set to true.
              projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
            },
            themeConfig: {
              defaultTheme: 'light',
              disableSwitch: true,
            },
            social: {
              linkedin: 'PatrickKwon',
              facebook: '',
              instagram: 'PatrickKwon_',
              dribbble: '',
              behance: '',
              medium: '',
              dev: '',
              website: '',
              phone: '',
              email: '',
            },
          },
        }}/>

    </div>
  );
}

export default GitHubStats;