"use client";
import {
    Card,
    CategoryBar,
    DeltaBar,
    MarkerBar,
    ProgressBar,
} from '@tremor/react';

export function CustomProgressBar() {
    return (
        <>
            <div className="backdrop-blur-sm bg-stone-950/50 p-5 rounded-xl mx-auto w-full">
                <div className="mx-auto grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                        <p className="text-center font-mono text-sm text-slate-500">
                            ProgressBar
                        </p>
                        <div className="flex justify-center">
                            <div className="backdrop-blur-sm bg-stone-950/50 p-5 rounded-xl mx-auto w-full">
                                <ProgressBar value={72} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-center font-mono text-sm text-slate-500">MarkerBar</p>
                        <div className="flex justify-center">
                            <div className="backdrop-blur-sm bg-stone-950/50 p-5 rounded-xl mx-auto w-full">
                                <MarkerBar value={62} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-center font-mono text-sm text-slate-500">DeltaBar</p>
                        <div className="flex justify-center">
                            <div className="backdrop-blur-sm bg-stone-950/50 p-5 rounded-xl mx-auto w-full">
                                <DeltaBar value={50} isIncreasePositive={true} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-center font-mono text-sm text-slate-500">
                            CategoryBar
                        </p>
                        <div className="flex justify-center">
                            <div className="backdrop-blur-sm bg-stone-950/50 p-5 rounded-xl mx-auto w-full">
                                <CategoryBar
                                    values={[40, 30, 20, 10]}
                                    colors={['emerald', 'yellow', 'orange', 'rose']}
                                    markerValue={62}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}