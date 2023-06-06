export function usePhone() {
  const { textKey, calling, hang } = useSelector(
    (state: RootState) => state.phone
  );
  const dispatch: AppDispatch = useDispatch();
}
