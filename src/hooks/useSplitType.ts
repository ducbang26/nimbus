import { RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react';
import SplitType, { TypesList } from 'split-type';

type SplitTargetElement =
  | HTMLDivElement
  | HTMLSpanElement
  | HTMLParagraphElement
  | HTMLHeadingElement;

interface UseSplitTypeProps {
  refTarget: RefObject<SplitTargetElement | null>;
  types?: TypesList;
}

interface UseSplitTypeResult {
  splitter: SplitType | null;
  revert: () => void;
}

export default function useSplitType({
  refTarget,
  types = 'lines,words,chars',
}: UseSplitTypeProps): UseSplitTypeResult {
  const splitterRef = useRef<SplitType | null>(null);
  const [splitter, setSplitter] = useState<SplitType | null>(null);

  /* ---------------- Split text on mount ---------------- */
  useLayoutEffect(() => {
    const element = refTarget.current;
    if (!element) return;

    const instance = new SplitType(element, { types });

    splitterRef.current = instance;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSplitter(instance);

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return () => {
      instance.revert();
      splitterRef.current = null;
      setSplitter(null);
    };
  }, [refTarget, types]);

  /* ---------------- Manual revert ---------------- */
  const revert = useCallback(() => {
    splitterRef.current?.revert();
    splitterRef.current = null;
    setSplitter(null);
  }, []);

  return {
    splitter,
    revert,
  };
}
