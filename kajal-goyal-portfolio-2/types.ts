import React from 'react';

export interface WorkItem {
  id: string;
  title: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}