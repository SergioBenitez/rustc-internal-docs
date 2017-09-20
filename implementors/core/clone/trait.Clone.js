(function() {var implementors = {};
implementors["alloc"] = ["impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/allocator/struct.Layout.html\" title=\"struct alloc::allocator::Layout\">Layout</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"alloc/allocator/enum.AllocErr.html\" title=\"enum alloc::allocator::AllocErr\">AllocErr</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/allocator/struct.CannotReallocInPlace.html\" title=\"struct alloc::allocator::CannotReallocInPlace\">CannotReallocInPlace</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/heap/struct.Heap.html\" title=\"struct alloc::heap::Heap\">Heap</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/boxed/struct.ExchangeHeapSingleton.html\" title=\"struct alloc::boxed::ExchangeHeapSingleton\">ExchangeHeapSingleton</a>","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T&gt;","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;str&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;[T]&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/arc/struct.Arc.html\" title=\"struct alloc::arc::Arc\">Arc</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/arc/struct.Weak.html\" title=\"struct alloc::arc::Weak\">Weak</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/rc/struct.Weak.html\" title=\"struct alloc::rc::Weak\">Weak</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/binary_heap/struct.BinaryHeap.html\" title=\"struct alloc::binary_heap::BinaryHeap\">BinaryHeap</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/binary_heap/struct.Iter.html\" title=\"struct alloc::binary_heap::Iter\">Iter</a>&lt;'a, T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/binary_heap/struct.IntoIter.html\" title=\"struct alloc::binary_heap::IntoIter\">IntoIter</a>&lt;T&gt;","impl&lt;K:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, V:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.BTreeMap.html\" title=\"struct alloc::btree_map::BTreeMap\">BTreeMap</a>&lt;K, V&gt;","impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.Iter.html\" title=\"struct alloc::btree_map::Iter\">Iter</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.Keys.html\" title=\"struct alloc::btree_map::Keys\">Keys</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.Values.html\" title=\"struct alloc::btree_map::Values\">Values</a>&lt;'a, K, V&gt;","impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.Range.html\" title=\"struct alloc::btree_map::Range\">Range</a>&lt;'a, K, V&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.BTreeSet.html\" title=\"struct alloc::btree_set::BTreeSet\">BTreeSet</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.Iter.html\" title=\"struct alloc::btree_set::Iter\">Iter</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.Range.html\" title=\"struct alloc::btree_set::Range\">Range</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.Difference.html\" title=\"struct alloc::btree_set::Difference\">Difference</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.SymmetricDifference.html\" title=\"struct alloc::btree_set::SymmetricDifference\">SymmetricDifference</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.Intersection.html\" title=\"struct alloc::btree_set::Intersection\">Intersection</a>&lt;'a, T&gt;","impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.Union.html\" title=\"struct alloc::btree_set::Union\">Union</a>&lt;'a, T&gt;","impl&lt;'a, B:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>,&nbsp;</span>","impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.Iter.html\" title=\"struct alloc::linked_list::Iter\">Iter</a>&lt;'a, T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.IntoIter.html\" title=\"struct alloc::linked_list::IntoIter\">IntoIter</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.LinkedList.html\" title=\"struct alloc::linked_list::LinkedList\">LinkedList</a>&lt;T&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/str/struct.EncodeUtf16.html\" title=\"struct alloc::str::EncodeUtf16\">EncodeUtf16</a>&lt;'a&gt;","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"alloc/string/enum.ParseError.html\" title=\"enum alloc::string::ParseError\">ParseError</a>","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/vec/struct.IntoIter.html\" title=\"struct alloc::vec::IntoIter\">IntoIter</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/vec_deque/struct.VecDeque.html\" title=\"struct alloc::vec_deque::VecDeque\">VecDeque</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/vec_deque/struct.Iter.html\" title=\"struct alloc::vec_deque::Iter\">Iter</a>&lt;'a, T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloc/vec_deque/struct.IntoIter.html\" title=\"struct alloc::vec_deque::IntoIter\">IntoIter</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"alloc/enum.Bound.html\" title=\"enum alloc::Bound\">Bound</a>&lt;T&gt;",];
implementors["core"] = [];
implementors["getopts"] = ["impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"getopts/enum.ParsingStyle.html\" title=\"enum getopts::ParsingStyle\">ParsingStyle</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"getopts/enum.HasArg.html\" title=\"enum getopts::HasArg\">HasArg</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"getopts/enum.Occur.html\" title=\"enum getopts::Occur\">Occur</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"getopts/struct.Matches.html\" title=\"struct getopts::Matches\">Matches</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"getopts/enum.Fail.html\" title=\"enum getopts::Fail\">Fail</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"getopts/enum.FailType.html\" title=\"enum getopts::FailType\">FailType</a>",];
implementors["rand"] = ["impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand/distributions/normal/struct.StandardNormal.html\" title=\"struct rand::distributions::normal::StandardNormal\">StandardNormal</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand/distributions/normal/struct.Normal.html\" title=\"struct rand::distributions::normal::Normal\">Normal</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand/distributions/normal/struct.LogNormal.html\" title=\"struct rand::distributions::normal::LogNormal\">LogNormal</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand/distributions/exponential/struct.Exp1.html\" title=\"struct rand::distributions::exponential::Exp1\">Exp1</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand/distributions/exponential/struct.Exp.html\" title=\"struct rand::distributions::exponential::Exp\">Exp</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand/isaac/struct.IsaacRng.html\" title=\"struct rand::isaac::IsaacRng\">IsaacRng</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand/isaac/struct.Isaac64Rng.html\" title=\"struct rand::isaac::Isaac64Rng\">Isaac64Rng</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand/chacha/struct.ChaChaRng.html\" title=\"struct rand::chacha::ChaChaRng\">ChaChaRng</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand/reseeding/struct.ReseedWithDefault.html\" title=\"struct rand::reseeding::ReseedWithDefault\">ReseedWithDefault</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rand/struct.XorShiftRng.html\" title=\"struct rand::XorShiftRng\">XorShiftRng</a>",];
implementors["std_unicode"] = ["impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"std_unicode/char/struct.UnicodeVersion.html\" title=\"struct std_unicode::char::UnicodeVersion\">UnicodeVersion</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"std_unicode/str/struct.SplitWhitespace.html\" title=\"struct std_unicode::str::SplitWhitespace\">SplitWhitespace</a>&lt;'a&gt;","impl&lt;I:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"std_unicode/str/struct.Utf16Encoder.html\" title=\"struct std_unicode::str::Utf16Encoder\">Utf16Encoder</a>&lt;I&gt;","impl&lt;I:&nbsp;<a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"std_unicode/char/struct.DecodeUtf16.html\" title=\"struct std_unicode::char::DecodeUtf16\">DecodeUtf16</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"core/iter/iterator/trait.Iterator.html\" title=\"trait core::iter::iterator::Iterator\">Iterator</a>&lt;Item = u16&gt;,&nbsp;</span>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"std_unicode/char/struct.DecodeUtf16Error.html\" title=\"struct std_unicode::char::DecodeUtf16Error\">DecodeUtf16Error</a>",];
implementors["term"] = ["impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"term/terminfo/parm/enum.Param.html\" title=\"enum term::terminfo::parm::Param\">Param</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"term/enum.Attr.html\" title=\"enum term::Attr\">Attr</a>",];
implementors["test"] = ["impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"test/stats/struct.Summary.html\" title=\"struct test::stats::Summary\">Summary</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"test/enum.TestName.html\" title=\"enum test::TestName\">TestName</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"test/enum.NamePadding.html\" title=\"enum test::NamePadding\">NamePadding</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"test/struct.Bencher.html\" title=\"struct test::Bencher\">Bencher</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"test/enum.BenchMode.html\" title=\"enum test::BenchMode\">BenchMode</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"test/enum.ShouldPanic.html\" title=\"enum test::ShouldPanic\">ShouldPanic</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"test/struct.TestDesc.html\" title=\"struct test::TestDesc\">TestDesc</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"test/struct.TestPaths.html\" title=\"struct test::TestPaths\">TestPaths</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"test/struct.Metric.html\" title=\"struct test::Metric\">Metric</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"test/struct.MetricMap.html\" title=\"struct test::MetricMap\">MetricMap</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"test/struct.Options.html\" title=\"struct test::Options\">Options</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"test/enum.ColorConfig.html\" title=\"enum test::ColorConfig\">ColorConfig</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"test/struct.BenchSamples.html\" title=\"struct test::BenchSamples\">BenchSamples</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"test/enum.TestResult.html\" title=\"enum test::TestResult\">TestResult</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"test/enum.TestEvent.html\" title=\"enum test::TestEvent\">TestEvent</a>",];
implementors["unwind"] = ["impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"unwind/enum._Unwind_Reason_Code.html\" title=\"enum unwind::_Unwind_Reason_Code\">_Unwind_Reason_Code</a>","impl <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"unwind/enum._Unwind_Action.html\" title=\"enum unwind::_Unwind_Action\">_Unwind_Action</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
