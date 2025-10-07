import { ChevronDown } from 'lucide-react';
import React, { ReactNode } from 'react';

const Collapse = ({ children, title }: { children: ReactNode, title: string }) => {
    return (
        <div className="w-full select-none container mx-auto space-y-2 py-2">
            <details className="group bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-medium text-gray-800">{title}</span>
                    <span className="transition-transform group-open:rotate-180">
                        <ChevronDown />
                    </span>
                </summary>
                <div>
                    {children}
                </div>
            </details>

        </div>
    );
};

export default Collapse;