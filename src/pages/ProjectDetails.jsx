// src/pages/ProjectDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { PageHero } from '../components/PageHero';

export function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <PageHero title={project.title} label={project.tag} bgImage={project.image} />
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/projects">← Back to Projects</Link>
        <h1>{project.title}</h1>
        <p>{project.fullDesc}</p>
      </section>
    </>
  );
}