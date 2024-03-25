import React from 'react';

const Projects = () => {
  return (
    <section class="project py-5" id="project">
      <div class="container">
              
              <div class="row">
                <div class="col-lg-11 text-center mx-auto col-12">

                    <div class="col-lg-8 mx-auto">
                      <h2>My Projects</h2>
                    </div>

                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <div class="project-info">
                          <img src="images/project/project-image01.png" class="img-fluid" alt=""/>
                        </div>
                      </div>

                      <div class="item">
                        <div class="project-info">
                          <img src="images/project/project-image02.png" class="img-fluid" alt=""/>
                        </div>
                      </div>

                      <div class="item">
                        <div class="project-info">
                          <img src="images/project/project-image03.png" class="img-fluid" alt="project"/>
                        </div>
                      </div>

                      <div class="item">
                        <div class="project-info">
                          <img src="images/project/project-image04.png" class="img-fluid" alt="project"/>
                        </div>
                      </div>

                      <div class="item">
                        <div class="project-info">
                          <img src="images/project/project-image05.png" class="img-fluid" alt="project"/>
                        </div>
                      </div>
                    </div>

                </div>
              </div>
      </div>
  </section>
  );
}

export default Projects;
