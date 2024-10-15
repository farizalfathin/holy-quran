import { TafsirType } from "@/types/detailSurah";
import {
  useAnimate,
  useDragControls,
  useMotionValue,
  motion,
} from "framer-motion";
import { ReactNode } from "react";
import useMeasure from "react-use-measure";

type isOpenTafsir = {
  namaLatin: string;
} & TafsirType;

export default function TafsirDrawer({
  isOpenTafsir,
  handleCloseTafsir,
}: {
  isOpenTafsir: isOpenTafsir | false;
  handleCloseTafsir: () => void;
}) {
  const isOpen = !!isOpenTafsir;
  return (
    <DragCloseDrawer isOpen={isOpen} handleCloseTafsir={handleCloseTafsir}>
      {isOpenTafsir ? (
        <div className="mx-auto max-w-2xl space-y-4 text-secondary-800">
          <h2 className="text-3xl font-bold text-secondary-800 sm:text-4xl">
            Tafsir Surat {isOpenTafsir.namaLatin} ayat {isOpenTafsir.ayat}
          </h2>
          <p className="whitespace-pre-wrap">{isOpenTafsir.teks}</p>
        </div>
      ) : null}
    </DragCloseDrawer>
  );
}

function DragCloseDrawer({
  isOpen,
  handleCloseTafsir,
  children,
}: {
  isOpen: boolean;
  handleCloseTafsir: () => void;
  children: ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    handleCloseTafsir();
  };

  return (
    isOpen && (
      <motion.div
        ref={scope}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleClose}
        className="fixed inset-0 z-50 bg-secondary-700/70">
        <motion.div
          id="drawer"
          ref={drawerRef}
          onClick={(e) => e.stopPropagation()}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{
            ease: "easeInOut",
          }}
          className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-secondary-200"
          style={{ y }}
          drag="y"
          dragControls={controls}
          onDragEnd={() => {
            if (y.get() >= 100) {
              handleClose();
            }
          }}
          dragListener={false}
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          dragElastic={{
            top: 0,
            bottom: 0.5,
          }}>
          <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-secondary-200 p-4">
            <button
              onPointerDown={(e) => {
                controls.start(e);
              }}
              className="h-2 w-14 cursor-grab touch-none rounded-full bg-secondary-500 active:cursor-grabbing"></button>
          </div>
          <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
            {children}
          </div>
        </motion.div>
      </motion.div>
    )
  );
}
