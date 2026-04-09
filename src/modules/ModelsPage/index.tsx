'use client';
import React from 'react';

import ModelsPageFilters from '@Modules/ModelsPage/Filters';
import ModelsPageHero from '@Modules/ModelsPage/Hero';
import ModelsPageLineup from '@Modules/ModelsPage/Lineup';
import ModelsPageTechnicalSupport from '@Modules/ModelsPage/TechnicalSupport';
import ModelsPageThreeDModels from '@Modules/ModelsPage/ThreeDModels';

const ModelsPage = (): React.ReactElement => {
  return (
    <main>
      <ModelsPageFilters />
      <ModelsPageHero />
      <ModelsPageLineup />
      <ModelsPageThreeDModels />
      <ModelsPageTechnicalSupport />
    </main>
  );
};

export default ModelsPage;
