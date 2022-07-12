import React from 'react';

interface SectionTitleProps {
  title: string;
  description?: string;
}
export default function SectionTitle({
  title,
  description,
  children,
}: React.PropsWithChildren<SectionTitleProps>) {
  return (
    <div className="container mx-auto px-8 lg:px-16">
      <div className="lg:pl-[30%] space-y-8 lg:space-y-16">
        <div className="space-y-8 w-full max-w-lg mb-8 lg:mb-16">
          <h2 className="font-serif text-5xl md:text-6xl">{title}</h2>
          {description && (
            <>
              <span className="block w-12 h-0.5 bg-brand" />
              <p className="text-black/50 dark:text-white/50 w-full w-4/5">
                {description}
              </p>
            </>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
