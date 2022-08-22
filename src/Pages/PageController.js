import {FullPageSections,FullpageSection} from '@ap.cx/react-fullpage'
import Githubstats from '../components/githubstats'
import Introduction from '../Sections/introduction'
import Showcase from '../Sections/showcase'
import Expertise from '../Sections/expertise'
import Quotes from '../Sections/quotes'
import AnimationTransition from "../components/animation_transition";
import cellularAutomataImg from '../assets/cellularAutomata.jpg'
import vorksinImg from '../assets/vorskin.jpg'
function PageController() {
  const BackgroundStyle = {
    backgroundColor: '#f5f5f5',
  }
  const SectionStyle =
  {
    position:'relative',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <FullPageSections style = {BackgroundStyle}>
      <AnimationTransition from='left' delay={300}>
        <FullpageSection style={SectionStyle}>
              <Introduction/>
        </FullpageSection>
      </AnimationTransition>

      <AnimationTransition from='left' delay={300}>
        <FullpageSection style={SectionStyle}>
            {/* <h1>Page2</h1> */}
            <Githubstats/>
        </FullpageSection>
      </AnimationTransition>


      <AnimationTransition from='left' delay={300}>
      <FullpageSection style={SectionStyle}>
          <h1 className="project-showcase fw-bold fs-5 position-absolute mt-4 top-0">Project Showcase</h1>
          <Showcase
          title="Cellular Automata"
          imgUrl={cellularAutomataImg}
          description="One of the algorithm used to make a perfect maze"
          className="showcase-item"
          />
      </FullpageSection>
      </AnimationTransition>

      <AnimationTransition from='left' delay={300}>
      <FullpageSection style={SectionStyle}>
          <Showcase
          title="Vorskin Website"
          imgUrl={vorksinImg}
          description="HCI Collage Assignment Second Semester"
          className="showcase-item"
          />
      </FullpageSection>
      </AnimationTransition>


      <AnimationTransition from='left' delay={300}>
      <FullpageSection style={SectionStyle}>
          <Quotes content="Strive to be what you what"/>
      </FullpageSection>
      </AnimationTransition>

      {/* <Header /> */}
      {/* <TestComponent delay={100} from={"top"} text={"hi"} className="w-75 h-75">
      </TestComponent>*/}

  </FullPageSections>
  );
}

export default PageController;