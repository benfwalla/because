export const formatProducerNames = (producerArtists) => {
    if (!producerArtists || producerArtists.length === 0) {
      return null;
    }
  
    const producerNames = producerArtists.map((producer) => producer.name);
    if (producerNames.length === 1) {
      return producerNames[0];
    } else if (producerNames.length === 2) {
      return producerNames.join(' & ');
    } else {
      const lastProducerName = producerNames.pop();
      return `${producerNames.join(', ')}, & ${lastProducerName}`;
    }
  };
